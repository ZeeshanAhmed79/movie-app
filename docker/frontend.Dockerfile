# -------------------------
# 1. BUILD STAGE
# -------------------------
    FROM node:18-alpine AS builder

    WORKDIR /app
    
    # Copy only package files
    COPY frontend/package.json frontend/package-lock.json* ./
    
    # Install dependencies INSIDE the container
    RUN npm install
    
    # Copy the rest of your app code
    COPY frontend/ .
    
    # Build the production frontend
    RUN npm run build
    
    
    # -------------------------
    # 2. NGINX SERVE STAGE
    # -------------------------
    FROM nginx:alpine
    
    # Copy built files from builder stage
    COPY --from=builder /app/dist /usr/share/nginx/html
    
    EXPOSE 80
    
    CMD ["nginx", "-g", "daemon off;"]
    