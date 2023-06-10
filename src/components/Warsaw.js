import React, { useEffect, useState } from 'react'

function Warsaw() {

    const [ID, setID] = useState('')
    const [Status, setStatus] = useState([])
    const [wet, setWet] = useState('')

    function handleReq(par) {
        fetch(`${ID}${par}`)
            .then(res => res.json())
            .then(resa => setWet(resa.status))
    }

    const [data, setData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // setData('Loading..')
                const response = await fetch('https://1b27-46-196-200-1.eu.ngrok.io/nem');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Veri alınırken bir hata oluştu:', error);
            }
        };

        fetchData();
    }, [data]);



    return (
        <div className='flex items-center justify-center flex-col'>
            <div className='w-96'>
                <input className='w-full mx-2 my-4 mt-8 py-1 rounded border-rr border-2 bg-transparent px-2 text-white outline-none' onChange={(e) => setID(e.target.value)} value={ID} type="text" />
                <button onClick={() => console.log(ID)} className='mx-2 text-white border-rr border-2 px-2 py-1 rounded bg-rr'>SAVE ID</button>
            </div>
            <div className='w-96'>
                <button onClick={() => handleReq('run')} className='w-full text-center flex items-center rounded-md my-4 relative md:my-4 transition duration-150 border outline-0 border-darker text-darker py-1 text-[1.1rem] bg-gradient-to-r from-transparent to-transparent  px-6 hover:from-rr hover:to-t hover:text-white mx-2'>
                    <p>OPEN MOTOR</p>
                </button>
                <button onClick={() => handleReq('stop')} className='w-full text-center flex items-center rounded-md my-4 relative md:my-4 transition duration-150 border outline-0 border-darker text-darker py-1 text-[1.1rem] bg-gradient-to-r from-transparent to-transparent  px-6 hover:from-rr hover:to-t hover:text-white mx-2'>
                    <p>CLOSE MOTOR</p>
                </button>

            </div>
            <div>
                <p className='text-white text-2xl'>NEM: {
                    Math.floor(100 - data.wet / 1024 * 100)
                }%</p>
            </div>
            <div>
                <p className='text-white text-2xl'>{wet}</p>
            </div>
        </div>

        // #include <ESP8266WiFi.h>
        // #include <ESP8266WiFi.h>
        // #include <ESP8266WebServer.h>
        // #include <ArduinoJson.h>

        // #define led 2
        // #define WetData A0
        // #define WetPow 13

        // #define RunMotor 5
        // #define RevMotor 4

        // const char* ssid = "TURKSAT-KABLONET-28C5-2.4G";
        // const char* password = "id6aalq4nm";



        // ESP8266WebServer server(80);

        // void handleAcik() {
        //   StaticJsonDocument<200> jsonDoc;
        //   jsonDoc["name"] = "paul";

        //   String response;
        //   serializeJson(jsonDoc, response);
        //   server.sendHeader("Access-Control-Allow-Origin", "*");
        //   server.sendHeader("Access-Control-Allow-Methods", "GET");
        //   server.sendHeader("Content-Type", "application/json");
        //   server.send(200, "application/json", response);
        //   digitalWrite(led, HIGH);
        // }

        // void handleWet() {
        //   digitalWrite(WetPow, HIGH);
        //   int nema = analogRead(WetData);
        //   Serial.println(nema);
        //   StaticJsonDocument<200> jsonDoc;
        //   jsonDoc["wet"] = nema;
        //   String response;
        //   serializeJson(jsonDoc, response);

        //   server.sendHeader("Access-Control-Allow-Origin", "*");
        //   server.sendHeader("Access-Control-Allow-Methods", "GET");
        //   server.sendHeader("Content-Type", "application/json");
        //   server.send(200, "application/json", response);


        //   digitalWrite(led, LOW);

        // }

        // void handleMotor(String deg) {
        //   String status = "";
        //   if(deg == "ac"){
        //     digitalWrite(RunMotor, HIGH);
        //     digitalWrite(RevMotor, LOW);
        //     status = "Motor Running";

        //   } else {
        //     digitalWrite(RunMotor, LOW);
        //     digitalWrite(RevMotor, LOW);
        //     status = "Motor Stopped";
        //   }
        //   StaticJsonDocument<200> jsonDoc;
        //     jsonDoc["status"] = status;
        //     String response;
        //     serializeJson(jsonDoc, response);

        //     server.sendHeader("Access-Control-Allow-Origin", "*");
        //     server.sendHeader("Access-Control-Allow-Methods", "GET");
        //     server.sendHeader("Content-Type", "application/json");
        //     server.send(200, "application/json", response);
        // }

        // void setup() {
        //   Serial.begin(115200);

        //   pinMode(WetPow, OUTPUT);
        //   pinMode(WetData, INPUT);
        //   pinMode(led, OUTPUT);
        //   pinMode(RunMotor, OUTPUT);
        //   pinMode(RevMotor, OUTPUT);

        //   WiFi.begin(ssid, password);
        //   while (WiFi.status() != WL_CONNECTED) {
        //     delay(1000);
        //     Serial.println("Connecting to WiFi...");
        //   }

        //   Serial.println("Connected to WiFi");

        //   server.on("/acik", handleAcik);
        //   server.on("/nem", handleWet);
        //   server.on("/run", [](){
        //     handleMotor("ac");
        //   });
        //   server.on("/stop", [](){
        //     handleMotor("stop");
        //   });
        //   server.begin();
        //   Serial.println("HTTP server started");
        // }


        // void loop() {
        //   server.handleClient();
        // }


    )
}

export default Warsaw