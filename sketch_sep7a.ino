void setup() {
  Serial.begin(9600); // Initialize serial communication
  pinMode(LED_BUILTIN, OUTPUT); // Set the built-in LED pin as an output
}

void loop() {
  if (Serial.available() > 0) {
    int data = Serial.parseInt(); // Read an integer from the serial port

    if (data == 22) {
      digitalWrite(LED_BUILTIN, HIGH); // Turn on the built-in LED if the received data is 22
      Serial.println("Built-in LED ON");
    } else {
      digitalWrite(LED_BUILTIN, LOW); // Turn off the built-in LED for any other value
      Serial.println("Built-in LED OFF");
    }
  }
}
