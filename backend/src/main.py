from flask import Flask, jsonify, request
from flask_cors import CORS
from clock import get_current_time, get_formatted_datetime
from datetime import datetime
import pytz

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # Allow all origins for testing

@app.route('/api/time', methods=['GET'])
def time_endpoint():
    timezone = request.args.get('timezone', 'UTC')
    try:
        tz = pytz.timezone(timezone)
        current_time = get_current_time(timezone)
        formatted_datetime = get_formatted_datetime(timezone)
        return jsonify({
            'status': 'success',
            'time': current_time,
            'timestamp': formatted_datetime,
            'timezone': timezone
        }), 200
    except pytz.exceptions.UnknownTimeZoneError:
        return jsonify({
            'status': 'error',
            'message': f'Invalid timezone: {timezone}'
        }), 400
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
