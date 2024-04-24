# middlewares.py

import logging

logger = logging.getLogger(__name__)

class RequestLoggingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Log information about the incoming request
        logger.info(f"Request from {request.META.get('REMOTE_ADDR')} to {request.path}")
        
        response = self.get_response(request)

        return response
