### Start
```bash
docker-compose up
```

### Start in background
```bash
docker-compose up -d
```

### Stop
```bash
docker-compose down
```

### Rebuild everything
```bash
docker-compose uo --build
```

### Only run specific services
```bash
docker-compose up postgres redis
```

### Stop + Delete everything
```bash
docker-compose down -v
```

### Enter api container
```bash
docker exec -it pingram-api-1 sh
```
