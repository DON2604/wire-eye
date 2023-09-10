void setup() {
    Serial.begin(9600);
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, LOW); 

void loop() {
    static bool ledState = false; 
    if (Serial.available() > 0) {
        int data = Serial.parseInt(); 

        if (data == 22 && !ledState) {
            digitalWrite(LED_BUILTIN, HIGH);
            Serial.println("Built-in LED ON"); 
            ledState = true; 
        } else if (data != 22 && ledState) {
            digitalWrite(LED_BUILTIN, LOW); 
            Serial.println("Built-in LED OFF");
            ledState = false; 
        }
    }
}
