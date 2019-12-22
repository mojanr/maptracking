const mqtt = require('mqtt')

class Mqtt {

    constructor() {
        this.mqttLocal = null
        this.mqttServer = null
    }

    connect() {
        // connect to local broker
        this.mqttLocal = mqtt.connect('ws://localhost:3001')
        this.mqttLocal.on('connect', () => {
            // log connect
            console.log('[MQTT LOCAL] - CONNECT')
            // connect to server broker
            this.mqttServer = mqtt.connect('mqtt://103.54.225.243:1883', {
                username: 'iotkai2019',
                password: 'iot123456'
            })
            this.mqttServer.on('connect', () => {
                // log connect
                console.log('[MQTT BROKER] - CONNECT')
                // subscribe all topic from server broker
                this.mqttServer.subscribe('#')
                // forward subscribed topic to local broker
                this.mqttServer.on('message', (topic, payload) => {
                    this.mqttLocal.publish(topic, payload.toString())
                })
            })
        })
    }

}

module.exports = Mqtt