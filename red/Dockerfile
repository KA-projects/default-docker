FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
    curl \
    vim \
    nano \
    software-properties-common \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \ 
    apt-get install -y nodejs

WORKDIR /app

# Layer caching
COPY package*.json ./

RUN npm install

COPY . .

RUN useradd -m red
RUN chown -R red:red /app

USER red

RUN npm run build

# CMD ["sleep", "infinity"]
CMD ["npm", "run", "dev"] 