#include <ESP8266WiFi.h>
#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"

#define DATABASE_URL "https://wire-eye-default-rtdb.asia-southeast1.firebasedatabase.app/"  // the project name address from firebase id
#define API_KEY "AIzaSyCXzG71LawqujLj3uwxor06w3xbZQWphns"         // the secret key generated from firebase
#define WIFI_SSID "SWARNAVO WIFI"
#define WIFI_PASSWORD "7439564835"

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
bool signupOK = false;

void setup() {
  Serial.begin(9600);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("Connected to- ");
  Serial.println(WIFI_SSID);
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("ok");
    signupOK = true;
  } else {
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }
  config.token_status_callback = tokenStatusCallback;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop() {

if (Firebase.ready() && signupOK) {
  if(Serial.available()){  
    int data = Serial.parseInt();
    if(data==11 || data==10)
    Firebase.RTDB.setInt(&fbdo, "/POST/Post1", data);
    if(data==21 || data==20)
    Firebase.RTDB.setInt(&fbdo, "/POST/Post2", data);
    if(data==31 || data==30)
    Firebase.RTDB.setInt(&fbdo, "/POST/Post3", data);
    if(data==41 || data==40)
    Firebase.RTDB.setInt(&fbdo, "/POST/Post4", data);
    if(data==51 || data==50)
    Firebase.RTDB.setInt(&fbdo, "/POST/Post5", data);
    if(data==61 || data==60)
    Firebase.RTDB.setInt(&fbdo, "/POST/Post6", data);
    if(data==71 || data==70)
    Firebase.RTDB.setInt(&fbdo, "/POST/Post7", data);
    if(data==81 || data==80)
    Firebase.RTDB.setInt(&fbdo, "/POST/Post8", data);
    }

}            
}