pipeline {
  agent any
  
  environment {
    dockerhub=credentials('docker-hub')
  }
  
  stages {
    stage('build') {
      steps {
        echo 'starting build stage...'
        echo "DH $dockerhub_USR $dockerhub_PSW "
        sh 'docker images -a'
        sh 'docker logout'
        sh "docker build --tag node-docker:v0.${env.BUILD_ID} . "
        /* sh(script: "docker run --rm node-docker:v0.${env.BUILD_ID} ") */
        sh 'npm config ls'
        sh 'node --version'
        
      }
    }
    stage('test') {
      steps {
        echo 'starting test stage...'
      }
    }
  }
  
  post {
    always {
      echo 'in post.always'
    }
    success {
      echo 'in post.success'
    }
    failure {
      echo 'in post.failure'
    }
  }
}
