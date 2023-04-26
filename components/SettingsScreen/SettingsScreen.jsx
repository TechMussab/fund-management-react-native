import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput} from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../constants/theme";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { appConstants } from '../../constants/appConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SettingsScreen = () => {
  const [keyInput, setKeyInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [settings, setSettings] = useState({});
  const handleAddEntry = () => {
    setSettings((prevSettingsList) => ({
      ...prevSettingsList,
      [keyInput]: parseInt(valueInput),
    }));
    setKeyInput('');
    setValueInput('');
    // saveMyList();
  };
  const removeEntry = (key) => {
    const newSettingsList = { ...settings };
    delete newSettingsList[key];
    setSettings(newSettingsList);
  };
  useEffect(() => {
    loadMyList();
  }, []);
  useEffect(() => {
    if(settings != null)
    {saveMyList();}
  }, [settings]);

  const loadMyList = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(appConstants.SETTINGS_SAVE_LOCATION_NAME);
      if (jsonValue != null) {
        setSettings(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error('Failed to load list to storage:', e);
    }
  };

  const saveMyList = async () => {
    try {
      const jsonValue = JSON.stringify(settings);
      await AsyncStorage.setItem(appConstants.SETTINGS_SAVE_LOCATION_NAME, jsonValue);
      console.log('List saved successfully!');
    } catch (e) {
      console.error('Failed to save list to storage:', e);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder="Enter Name"
          value={keyInput}
          onChangeText={setKeyInput}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Expense"
          value={valueInput}
          onChangeText={setValueInput}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.btn} onPress={handleAddEntry}>
        <Ionicons name="add" color={COLORS.primary} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.listView}>
        {Object.entries(settings).map(([key, value],index) => (
          <View  key={key} style={styles.container}>
            <View style={{display:'flex',flexDirection:'row'}}>
              <TextInput style={{ color: COLORS.secondary, fontSize: 20 }} value={key} editable={false} />
              <TextInput>:</TextInput>
              <TextInput style={{ color: COLORS.gray, fontSize: 20 }} value={value.toString()} editable={false} />
            </View>
            <TouchableOpacity style={{alignItems:'flex-start',...styles.btn}} onPress={()=>
            {
              removeEntry(key)
            }
            }>
              <Ionicons name="remove" color={COLORS.primary} size={20} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  listView:
  {
    margin:20,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  container: {
    justifyContent:'space-between',
    width:'50%',
    textDecorationColor:COLORS.primary,
    margin:20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn:
  {
    borderWidth:2,
    padding:10,
    color:COLORS.gray,
    borderRadius:50,
    marginLeft:20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth:2,
    paddingTop:10,
    paddingBottom:10,
    paddingEnd:20,
    paddingStart:20,
    borderRadius:50,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {},
});
