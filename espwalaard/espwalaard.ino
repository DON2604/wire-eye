int light5;
int light6;
int light7;
int light8;
void setup() {
  Serial.begin(9600); // Initialize serial communication
}

void loop() {
      Serial.println(Serial.parseInt());
      light5 = analogRead(A0);
      if(light5>60)
      Serial.println(51);
      else
      Serial.println(50);
      delay(100);
      light6 = analogRead(A1);
      if(light6>60)
      Serial.println(61);
      else
      Serial.println(60);
      delay(100);
      light7 = analogRead(A2);
      if(light7>60)
      Serial.println(71);
      else
      Serial.println(70);
      delay(100);
      light8 = analogRead(A3);
      if(light8>60)
      Serial.println(81);
      else
      Serial.println(80);
      delay(100);
      delay(1000);
}