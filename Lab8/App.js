import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const App = () => {
  useEffect(() => {
    // Open or create the database
    const db = SQLite.openDatabase(
      { name: 'testDB.db', location: 'default' },
      () => console.log('Database opened successfully'),
      error => console.error('Error opening database: ', error)
    );

    // Create table
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Personnel (id INTEGER PRIMARY KEY AUTOINCREMENT, department_number TEXT, employee_id TEXT, last_name TEXT, date_of_birth TEXT, position TEXT, phone_number TEXT)'
      );
    });

    // Insert data
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Personnel (department_number, employee_id, last_name, date_of_birth, position, phone_number) VALUES (?, ?, ?, ?, ?, ?)',
        ['101', '1001', 'John Doe', '1990-01-01', 'Manager', '123-456-7890'],
        () => console.log('Data inserted successfully'),
        error => console.error('Error inserting data: ', error)
      );
    });

    // Query data
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Personnel WHERE department_number = ?',
        ['101'],
        (_, { rows }) => {
          console.log('Query results: ', rows);
        },
        error => console.error('Error querying data: ', error)
      );
    });

    // Close database connection
    return () => {
      db.close();
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SQLite Database Example</Text>
    </View>
  );
};

export default App;
