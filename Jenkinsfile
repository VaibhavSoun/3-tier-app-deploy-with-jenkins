pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/VaibhavSoun/3-tier-app-deploy-with-jenkins.git'
      }
    }

    stage('Build & Deploy') {
      steps {
        dir('3tier-app') {
          sh '''
          docker-compose down || true
          docker-compose up --build -d
          '''
        }
      }
    }

    stage('Health Check') {
      steps {
        sh 'sleep 10'
        sh 'curl -f http://10.160.0.2:3000 || exit 1'
      }
    }
  }
}
