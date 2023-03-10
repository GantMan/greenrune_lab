// Constants
/* globals constants */
/* globals $ */
var params = {
    ELEMENT_TEXT_HANDLE_DISTANCE : 7,
    ELEMENT_SCALE_MIN : 0.1,
    ELEMENT_SCALE_MAX : 5,
    ELEMENT_DEFAULT_HEIGHT:1,
    ELEMENT_DEFAULT_WIDTH:1,
    ELEMENT_DEFAULT_ROTATION:0,
    ELEMENT_DEFAULT_KEEPRATIO:true,
    ELEMENT_DISPLACEMENT:3,
    ELEMENT_ROTATION: 1,
    RAPHAEL_PAPER:'paper',
    W : 900,
    H : 675,
    TEXT_DEFAULT_SIZE : '30px',
    TEXT_DEFAULT_FONT_COLOR : '#000000',
    DEBOUNCE: 20,
    GIFINTERVAL_MIN: 0.1,
    GIFINTERVAL_MAX: 10,
    GIFINTERVAL_STEP: 0.1,
    TOOLTIP_DELAY: 600,
    ENABLED_CHARACTERS: '^[a-zA-Z0-9\'",:_\!\?\-]$'
};

$.extend(constants, params);
