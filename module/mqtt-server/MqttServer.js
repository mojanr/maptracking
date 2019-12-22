

class MqttServer {

    constructor(mqttLocal) {
        this.mqttServer = null
        this.mqttLocal = null
    }

    connect() {
        this.mqttServer = mqtt.connect('mqtt://103.54.225.243:1883', {
            username: 'iotkai2019',
            password: 'iot123456'
        })

        mqttServer.on('connect', () => {
            // mqttServer.subscribe('#')
            console.log('[MQTT CONNECT] KAI BROKER')
        })

        mqttServer.on('message', (topic, payload) => {
            console.log(payload.toString())
        })
    }

    publish() {

    }

}