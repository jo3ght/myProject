import React ,{useState} from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity } from 'react-native';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // fetch('http://192.168.100.10:8080/api/getAccount')
  // .then((response) => response.json())
  // .then((json) => {
  //   setAccounts(json)
  // })
  // .catch((error) => {
  //   alert(error)
  // })



  function validateFrom() {
    if (username == "") {
      alert("Please insert your username");
    } else if (password== "") {
      alert("Please insert your password! ");
    }
      else {
        fetch('http://127.0.0.1:8000/api/signin', {
          method: 'post',
          body: new URLSearchParams({
            username: username,
            password: password
          }).toString(),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(response => response.json())
          .then(json => {
            navigation.navigate('Service',{user: json})
          }
          ).catch(error => {
            alert("Username or password is incorect")
          });
       
    }
  }
  return (
    <View style={style.container}>
       <ImageBackground
          style={style.bg}
          source={{
            uri:
              "https://i.pinimg.com/564x/c5/c7/f3/c5c7f350d094b00a587a23b627920cc1.jpg"
          }}
        >
          <Text style={style.textTile}>Enter your infomartion</Text>
          <Text style={style.titleInput}>Full Name: </Text>

          <TextInput
            placeholder="Anderson Berlus"
            style={style.input}
            value={username}
            keyboardType="default"
            onChangeText={value => setUsername(value)}
          />
          <Text style={style.titleInput}>Password: </Text>

          <TextInput
            keyboardType="default"
            secureTextEntry={true}
            style={style.input}
            placeholder="29"
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <Text style= {style.register} onPress={() => navigation.navigate('SignUp')}>Need an account ?</Text>

          <TouchableOpacity style={style.btn} onPress={() => validateFrom()}>
            <Text style={style.txt}>Enter</Text>
          </TouchableOpacity>

        </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  titleInput: {
    fontWeight: "bold",
    color: "#ea526f",
    marginLeft: 16,
    marginTop: 18,
    fontWeight: "bold",
    fontSize: 15
  },
  register: {
    textAlign:"right",
    marginRight:20,
    fontSize: 18,
    fontWeight:"bold",
    alignItems:"flex-end",
    color:'white',
  },
  txt: {
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center",
    color: "white",
    justifyContent: "center"
  },
  btn: {
    borderColor: "#ea526f",
    backgroundColor: "#ea526f",
    margin: 18,
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    borderRadius: 30,
    height: 60,
    textAlign: "center",
    borderWidth: 1
  },
  input: {
    margin: 18,
    color: "#ffff",
    marginTop: 16,
    height: 60,
    fontSize: 25,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ffff",
    paddingHorizontal: 20
  },
  bg: {
    width: "100%",
    height: "100%"
  },
  button: {
    alignItems: "center",
    fontSize: 30,
    padding: 10,
    color: "blue",
    margin: 20
  },
  textTile: {
    fontSize: 35,
    color: "white",
    textAlign: "center",
    marginTop: 100
  }
});
