pipeline {
  agent any
  
  stages {
    stage('build') {
      steps {
        echo 'starting build stage...'
        sh(script: 'docker images -a')
        sh(script: "docker build --tag node-docker:v0.${env.BUILD_ID} .")
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
