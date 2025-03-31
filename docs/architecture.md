# World Time App Architecture

## Overview
The World Time App is a simple web application displaying digital and analogue clocks with timezone selection. It runs on an AWS EC2 t3.micro instance, orchestrated with Docker, and managed through a CI/CD pipeline.

## Components
- **Frontend**: HTML/CSS/JavaScript served by Nginx, displaying clocks and fetching time from the backend.
- **Backend**: Python Flask API providing time data for various timezones.
- **Infrastructure**: AWS EC2 instance within a VPC, subnet, and security groups, provisioned by Terraform.
- **Containerization**: Docker and Docker Compose for building and running services.
- **Configuration**: Ansible for EC2 setup and app deployment.
- **CI/CD**: Jenkins and GitHub Actions for building, scanning, and deploying.
- **Security**: Gitleaks (secrets), Trivy (image vulnerabilities), SonarQube (code quality).

## Architecture Diagram

[Browser] --> [EC2:8080 (Frontend)] --> [EC2:5000 (Backend)]
|                 |                       |
+-----> [Docker Compose] <---- [Terraform/Ansible]
|                 |                       |
+-----> [Jenkins/GitHub Actions] <---- [Security Tools]


## Data Flow
1. User selects a timezone from the frontend dropdown.
2. Frontend fetches time from the backend via `/api/time?timezone=<tz>`.
3. Backend returns time and timestamp in JSON format.
4. Frontend updates digital and analogue clocks.

## Deployment
- Terraform provisions the EC2 instance.
- Ansible configures Docker and deploys the app.
- CI/CD pipelines build images, run security scans, and deploy to EC2.
