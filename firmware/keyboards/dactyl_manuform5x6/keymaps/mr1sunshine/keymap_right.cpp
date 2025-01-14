#include "keymap.h"

std::array<std::array<Key, MATRIX_COLS>, MATRIX_ROWS> matrix = {
    KEYMAP(
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                                KC_NO, KC_NO,
                    KC_NO, KC_NO,
        KC_NO, KC_NO,
        KC_NO, KC_NO
    )
};

void setupKeymap() {
    uint32_t press[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP(
                        KC_NO, KC_NO, KC_NO,    KC_NO,  KC_NO,     KC_NO,
                        KC_Y,  KC_U,  KC_I,     KC_O,   KC_P,      KC_BSPACE,
                        KC_H,  KC_J,  KC_K,     KC_L,   KC_SCOLON, KC_QUOTE,
                        KC_N,  KC_M,  KC_COMMA, KC_DOT, KC_SLSH,   KC_CAPS,
                                            DLTROW,  RPLACE,
                        KC_NO, KC_NO,
        KC_NO, KC_BSPACE,
        KC_NO, KC_NO
    );

    uint32_t tap[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP(
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                                KC_NO, KC_NO,
                    KC_TAB, KC_ENT,
        KC_NO, KC_NO,
        KC_NO, KC_NO
    );

    uint32_t hold[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP(
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                                KC_NO, KC_NO,
                    L_RAISE, KC_RSFT,
        KC_NO, KC_NO,
        KC_NO, KC_NO
    );

    uint32_t lower[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
                        KC_NO,   KC_NO,   KC_NO,   KC_NO,   KC_NO,      KC_NO,
                        KC_GRV,  KC_LCBR, KC_RCBR, KC_NO,   KC_NO,      KC_NO,
                        KC_TILD, S(KC_9), S(KC_0), KC_QUOT, S(KC_QUOT), KC_NO,
                        KC_NO,   KC_LBRC, KC_RBRC, KC_NO,   KC_NO,      KC_NO,
                                            KC_NO, KC_NO,
                        _______, _______,
        _______, KC_DEL,
        _______, _______
    );

    uint32_t raise[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
                        KC_NO,     KC_NO,   KC_NO,   KC_NO,    KC_MPLY, KC_NO,
                        KC_PGUP,   LTSCRN,  KC_UP,   RTSCRN,   KC_MSTP, KC_NO,
                        KC_PGDOWN, KC_LEFT, KC_DOWN, KC_RIGHT, KC_MNXT, KC_NO,
                        NTSCRN,    MXSCRN,  FLSCRN,  SEARCH,   KC_MPRV, KC_NO,
                                            _______, _______,
                        _______,   _______,
        _______, _______,
        _______, _______
    );

    uint32_t adjust[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
                        KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, PRINT_BATTERY,
                        KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, _______,
                        KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, _______,
                        KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, PRINT_INFO,
                                            _______, _______,
                        _______, _______,
        _______, _______,
        _______, _______
    );

    for (int row = 0; row < MATRIX_ROWS; ++row)
    {
        for (int col = 0; col < MATRIX_COLS; ++col)
        {
            matrix[row][col].addActivation(_QWERTY, Method::PRESS, press[row][col]);
            matrix[row][col].addActivation(_QWERTY, Method::MT_TAP, tap[row][col]);
            matrix[row][col].addActivation(_QWERTY, Method::MT_HOLD, hold[row][col]);
            matrix[row][col].addActivation(_LOWER, Method::PRESS, lower[row][col]);
            matrix[row][col].addActivation(_RAISE, Method::PRESS, raise[row][col]);
            matrix[row][col].addActivation(_ADJUST, Method::PRESS, adjust[row][col]);
        }
    }

}

void process_user_macros(uint16_t macroid)
{}


void process_user_layers(uint16_t layermask)
{
    KeyScanner::process_for_tri_layers(_LOWER, _RAISE, _ADJUST);
}
