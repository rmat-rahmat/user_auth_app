import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import i18n from '../translation/i18n';

// Map language codes to full language names for display
const LANGUAGE_LABELS = {
  en: 'English',
  ms: 'Bahasa Melayu',
  bm: 'Bahasa Melayu',
  zh: '中文 (Chinese)',
  ta: 'தமிழ் (Tamil)',
  kelantan: 'Melayu Kelantan',
  perak: 'Melayu Perak',
};

export const LanguageChangeWrapper = ({ children }) => {
  const insets = useSafeAreaInsets();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  // Dynamically get language codes from i18n resources
  const languageList = Object.keys(i18n.options.resources).map(code => ({
    code,
    label: LANGUAGE_LABELS[code] || code.toUpperCase()
  }));

  // Handle language change from dropdown
  const handleChange = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Main content */}
      <View style={{ flex: 1 }}>
        {children}
      </View>
      {/* Language selection dropdown at the bottom */}
      <View style={[styles.langBar, { paddingBottom: insets.bottom + 10 }]}>
        <Text style={styles.langLabel}>{i18n.t('changeLanguage')}</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedLang}
            onValueChange={handleChange}
            style={styles.picker}
            mode="dropdown"
            dropdownIconColor="#333"
          >
            {languageList.map(lang => (
              <Picker.Item key={lang.code} label={lang.label} value={lang.code} />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
};

// Styles for the language dropdown and bar
const styles = StyleSheet.create({
  langBar: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderColor: '#eee',
    minHeight: 80,
  },
  langLabel: {
    marginBottom: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  pickerWrapper: {
    width: "80%",
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    color: '#333',
  },
});