from datetime import datetime
import pytz

def get_current_time(timezone='UTC'):
    """Get current time in specified timezone in HH:MM:SS format"""
    tz = pytz.timezone(timezone)
    current_time = datetime.now(tz)
    return current_time.strftime('%H:%M:%S')

def get_formatted_datetime(timezone='UTC'):
    """Get ISO formatted datetime in specified timezone"""
    tz = pytz.timezone(timezone)
    return datetime.now(tz).isoformat()
