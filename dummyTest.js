// below import would fail without babel
import timeago from 'timeago.js';

const timeAgoInstance = timeago();
const value = timeAgoInstance.format('2018-01-21')

value