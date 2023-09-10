#include <ESP8266WiFi.h>

const char *ssid =  "spoidermon";     // replace with your wifi ssid and wpa2 key
const char *pass =  "GAMERDON2604";

WiFiClient client;
 
void setup() 
{
       Serial.begin(9600);
       delay(10);
               
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
  Serial.println(22);
}