
pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/YOUR_USERNAME/3tier-app.git'
      }
    }

    stage('Build') {
      steps {
        sh 'docker-compose build'
      }
    }

    stage('Deploy') {
      steps {
        sh '''
        docker-compose down || true
        docker-compose up -d
        '''
      }
    }

    stage('Health Check') {
      steps {
        sh 'curl -f http://localhost:3000 || exit 1'
      }
    }
  }
}
