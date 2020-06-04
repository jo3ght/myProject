import React, {useState}from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

export default function SignUpScreen({navigation}) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [add, setAdd] = useState("");

  function handleSubmit() {
    if (username == "") {
      alert("Please insert your username");
    } else if (password == "") {
      alert("Please insert your password! ");
    }
    else if (fullname == "") {
      alert("Please insert your name! ");
    }
    else if (phone == "") {
      alert("Please insert your phone! ");
    }
    else if (add == "") {
      alert("Please insert your add! ");
    }
    else{
      fetch('http://127.0.0.1:8000/api/signup', {
        method: 'post',
        body: new URLSearchParams({
          username: username,
          password: password,
          fullname: fullname,
          phone:phone,
          add : add,
        }).toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => response.text())
        .then(json => {
          navigation.navigate('Login',{user: json})
          alert('Sign up successfully')
        }
        ).catch(error => {
          alert(error)
        });
    }
  }

  return (
    <View style={style.container}>
      <ImageBackground
        style={style.viewBg}
        source={{
          uri:
            "https://i.pinimg.com/564x/88/fb/62/88fb627b0397d9666e6ddba29b88c75f.jpg"
        }}
      >
        <View style={style.viewAddBook}>
          <Text style={style.textTile}>Create an account</Text>
          <Text style={style.titleInput}>Username </Text>

          <TextInput
            value={username}
            placeholder="Admin"
            style={style.input}
            keyboardType="default"
            onChangeText={value => setUsername(value)}

          />
          <Text style={style.titleInput}>Password: </Text>

          <TextInput
            value={password}
            placeholder="..."
            style={style.input}
            secureTextEntry={true}
            keyboardType="default"
            onChangeText={value => setPassword(value)}

          />
          <Text style={style.titleInput}>Full name: </Text>

          <TextInput
            value={fullname}
            keyboardType="default"
            placeholder="368"
            style={style.input}
            keyboardType="default"
            onChangeText={value => setFullName(value)}

          />

          <Text style={style.titleInput}>Phone: </Text>

          <TextInput
            value={phone}
            style={style.input}
            keyboardType="numeric"
            placeholder="0973388388"
            onChangeText={value => setPhone(value)}

          />
          <Text style={style.titleInput}>Address: </Text>

          <TextInput
            value={add}
            style={style.input}
            keyboardType="default"
            placeholder="Ha Noi"
            onChangeText={value => setAdd(value)}


          />

          <View style={style.viewBtn}>
            <TouchableOpacity
              style={style.btnAddBookModal}
              onPress={() => handleSubmit()}
            >
              <Text numberOfLines={2} style={style.txtGoBack}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  titleInput: {
    fontWeight: "bold",
    color: "#473051",
    fontWeight: "bold",
    fontSize: 15
  },
  viewBg: {
    width: '100%',
    height: '100%',
  },
  btnAddBookModal: {
    justifyContent: "center",
    height: 60,
    width: "90%",
    margin: 18,
    borderWidth: 1,
    borderRadius: 30,
    
    borderColor: "#36abb5",
    backgroundColor: "#36abb5"
  },
  viewBtn: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnSwitch: {
    margin: 18,
  },
  input: {
    margin: 18,
    color: "black",
    marginTop: 16,
    height: 60,
    fontSize: 25,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fcf5e9',
    borderColor: "#fdfaf4",
    paddingHorizontal: 20
  },
  textTile: {
    marginBottom: 32,
    fontWeight: 'bold',
    fontSize: 35,
    color: "black",
    textAlign: "center",
  },
  viewAddBook: {
    margin: 16,
    flex: 1,
    marginTop: 16,
    justifyContent: 'center',
  },
  txtGoBack: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    textAlign: "center",
    alignItems: "center"
  },
  btnGoBack: {
    justifyContent: "center",
    height: 50,
    width: "45%",
    margin: 18,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#ea526f",
    backgroundColor: "#ea526f"
  },
  txt: {
    fontWeight: '900',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnAdd: {
    marginTop: 8,
    width: 150,
    height: 30,
    alignItems: "center",
    borderColor: "#FF847C",
    backgroundColor: "#FF847C",
    color: "#FF847C",
    borderRadius: 30,
    borderWidth: 1
  },
  ava: {
    marginTop: 32,
    borderWidth: 5,
    borderColor: "white",
    width: 120,
    height: 120,
    borderRadius: 70
  },
  txtBoxName: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  },
  boxName: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    height: 200,
    margin: 8
  },
  imageBackground: {
    alignItems: "center",
    textAlign: "center",
    marginTop: 16,
    width: "100%",
    height: 150
  }
});