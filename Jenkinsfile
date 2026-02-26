pipeline {
    agent any

    environment {
        WEATHER_API_KEY = credentials('WEATHER_API_KEY')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'test/CICD', url: 'https://github.com/MovinVinusandha/React-Weather-App.git'
            }
        }

        stage('Build') {
            steps {
                sh "docker build -t weather-app:latest --build-arg REACT_APP_API_KEY=${WEATHER_API_KEY} ."
            }
        }

        stage('Deploy') {
            steps {
                sh "docker stop weather-app-container || true"
                sh "docker rm weather-app-container || true"
                sh "docker run -d -p 8000:80 --name weather-app-container weather-app:latest"
            } 
        }
    }
}