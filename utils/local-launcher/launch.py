import http.server
import socketserver
import socket

def find_available_port(start_port=9999, max_attempts=100):
    for port in range(start_port, start_port + max_attempts):
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.bind(('', port))
                return port
        except OSError:
            continue
    raise Exception("Failed to find an available port")

PORT = find_available_port()

with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
    print(f"Server is hosted on port {PORT}")
    httpd.serve_forever()