#include <ESP8266WiFi.h>

const char *ssid =  "spoidermon";     // replace with your wifi ssid and wpa2 key
const char *pass =  "GAMERDON2604";

WiFiClient client;
 
void setup() 
{
       Serial.begin(9600);
       delay(10);
       pinMode(12,OUTPUT);
      
       Serial.println("Connecting to ");
       Serial.println(ssid); 
 
       WiFi.begin(ssid, pass); 
       while (WiFi.status() != WL_CONNECTED) 
          {
            delay(500);
            Serial.print(".");
          }
      Serial.println("");
      Serial.println("WiFi connected"); 
}
 
void loop() 
{     
  if (Serial.available() > 0) {
    int data = Serial.parseInt(); // Read an integer from the serial port

    if (data == 22) {
      digitalWrite(12, HIGH); // Turn on the built-in LED if the received data is 22
    } else {
      digitalWrite(12, LOW); // Turn off the built-in LED for any other value
      Serial.println("Built-in LED OFF");
    }
  }

}