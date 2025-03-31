import pytest
from src.clock import get_current_time, get_formatted_datetime

def test_get_current_time_valid_timezone():
    time = get_current_time('UTC')
    assert len(time.split(':')) == 3  # Should return HH:MM:SS format
    assert all(int(x) >= 0 for x in time.split(':'))  # Valid time values

def test_get_formatted_datetime_valid_timezone():
    dt = get_formatted_datetime('UTC')
    assert 'T' in dt  # ISO format should contain T
    assert dt.endswith('Z') or '+' in dt  # Should have timezone info

def test_get_current_time_invalid_timezone():
    with pytest.raises(pytz.exceptions.UnknownTimeZoneError):
        get_current_time('Invalid/Timezone')
