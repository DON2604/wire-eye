int light1;
int light2;
int light3;
int light4;
void setup() {
  Serial.begin(9600); // Initialize serial communication
}

void loop() {
      light1 = analogRead(A0);
      if(light1>60)
      Serial.println(11);
      else
      Serial.println(10);
      delay(100);
      light2 = analogRead(A1);
      if(light2>60)
      Serial.println(21);
      else
      Serial.println(20);
      delay(100);
      light3 = analogRead(A2);
      if(light3>60)
      Serial.println(31);
      else
      Serial.println(30);
      delay(100);
      light4 = analogRead(A3);
      if(light4>60)
      Serial.println(41);
      else
      Serial.println(40);
      delay(100);

      delay(2000);
}