import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'native-base';

const mainColor = '#01C89E';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  emailColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  emailIcon: {
    color: mainColor,
    fontSize: 30,
  },
  emailNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  emailNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  emailRow: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emailText: {
    fontSize: 16,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
});

const Email = ({containerStyle, onPressEmail, name, email}) => (
  <TouchableOpacity onPress={() => onPressEmail(email)}>
    <View style={[styles.container, containerStyle]}>
      <View style={styles.iconRow}>
        <Icon
          type="MaterialCommunityIcons"
          name="email"
          iconStyle={styles.emailIcon}
          onPress={() => onPressEmail()}
        />
      </View>
      <View style={styles.emailRow}>
        <View style={styles.emailColumn}>
          <Text style={styles.emailText}>{email}</Text>
        </View>
        <View style={styles.emailNameColumn}>
          {name.trim().length !== 0 && (
            <Text style={styles.emailNameText}>{name}</Text>
          )}
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default Email;
