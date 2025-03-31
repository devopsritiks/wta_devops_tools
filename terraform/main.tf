provider "aws" {
  region = var.aws_region
}

resource "aws_instance" "world_time_app" {
  ami           = var.ami_id
  instance_type = "t3.micro"
  subnet_id     = aws_subnet.main.id
  vpc_security_group_ids = [aws_security_group.app_sg.id]
  
  associate_public_ip_address = true
  
  tags = {
    Name = "world-time-app-instance"
  }

  # User data to install Docker (will be enhanced by Ansible later)
  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              amazon-linux-extras install docker -y
              service docker start
              usermod -a -G docker ec2-user
              EOF
}
