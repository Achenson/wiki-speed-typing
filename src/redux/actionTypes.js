// file not used for now!!! strings are dispatched instead
let actionTypes = {
  RESULTS_CORRECT: "RESULTS_CORRECT",
  RESULTS_INCORRECT: "RESULTS_INCORRECT",
  RESULTS_NO_PENALTY: "RESULTS_NO_PENALTY",
  RESULTS_RESET: "RESULTS_RESET",
  SET_LIVE_RESULTS: "SET_LIVE_RESULTS",
  RESET_LIVE_RESULTS: "RESET_LIVE_RESULTS",
  SET_FINAL_RESULTS: "SET_FINAL_RESULTS",
  //  from <App/>
  HINTS_VISIBILITY: "HINTS_VISIBILITY",
  RESULTS_VISIBILITY: "RESULTS_VISIBILITY",
  STATS_VISIBILITY: "STATS_VISIBILITY",
  TIMER_VALUE: "TIMER_VALUE",
  TIMER_VALUE_COUNTDOWN: "TIMER_VALUE",
  CONSTANT_TIMER_VALUE: "CONSTANT_TIMER_VALUE",
  COUNTER_RUNNING: "COUNTER_RUNNING",
  TOGGLE_ACTIVE: "TOGGLE_ACTIVE",
  SET_IS_ACTIVE_TO_FALSE: "SET_IS_ACTIVE_TO_FALSE",
  TO_RESET_TRUE: "TO_RESET_TRUE",
  TO_RESET_FALSE: "TO_RESET_FALSE",
  // App only
  DISPLAY_TO_RESET_TRUE: "DISPLAY_TO_RESET_TRUE",
  // Display only
  DISPLAY_TO_RESET_FALSE: "DISPLAY_TO_RESET_FALSE",
  // <Fetch/> only ?
  MY_TEXT: "MY_TEXT",
  WIKI_TITLE: "WIKI_TITLE",
  // from App
  RANDOM_ARTICLE_FALSE: "RANDOM_ARTICLE_FALSE",
  // for wikiController, from App
  RANDOM_ARTICLE_TRUE: "RANDOM_ARTICLE_TRUE",
  // <Display only>
  INDEX_OF_PARTIAL_TEXTARR: "INDEX_OF_PARTIAL_TEXTARR",
  // from <Display/>
  TEXT_AREA_VALUE: "TEXT_AREA_VALUE",
  PREV_TEXT_AREA_VALUE: "PREV_TEXT_AREA_VALUE",
  COLOR_FOR_EACH_LETTER: "COLOR_FOR_EACH_LETTER",


  // stats
  UPDATE_STATS: "UPDATE_STATS",
  SET_CURRENT_STATS: "SET_CURRENT_STATS",
  DELETE_CURRENT_STATS: "DELETE_CURRENT_STATS",
  // auth
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",

  NOTIFICATION_TRUE: "NOTIFICATION_TRUE",
  NOTIFICATION_FALSE: "NOTIFICATION_TRUE",

  LOGIN_ERROR_TRUE: "LOGIN_ERROR_TRUE",

  LOGIN_ERROR_FALSE: "LOGIN_ERROR_FALSE",
  REGISTER_ERROR_TRUE: "REGISTER_ERROR_TRUE",

  REGISTER_ERROR_FALSE: "REGISTER_ERROR_FALSE",

  //for AuthenficationUI logout
  RESET_FINAL_RESULTS: "RESET_FINAL_RESULTS",

  // focusTextArea value
  ENABLE_FOCUS_TEXT_AREA: "ENABLE_FOCUS_TEXT_AREA",
  DISABLE_FOCUS_TEXT_AREA: "ENABLE_FOCUS_TEXT_AREA",
};

export default actionTypes;
