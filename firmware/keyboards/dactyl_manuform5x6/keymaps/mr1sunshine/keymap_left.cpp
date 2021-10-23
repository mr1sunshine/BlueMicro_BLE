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
            KC_ESC,  KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
            KC_TAB,  KC_Q,  KC_W,  KC_E,  KC_R,  KC_T,
            KC_LCTL, KC_A,  KC_S,  KC_D,  KC_F,  KC_G,
            KC_LSFT, KC_Z,  KC_X,  KC_C,  KC_V,  KC_B,
                        KC_NO, KC_NO,
                                    KC_LGUI, KC_NO,
                                                    KC_LALT, KC_NO,
                                                    KC_NO,   KC_NO
    );

    uint32_t tap[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP(
            KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
            KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
            KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
            KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                        KC_NO, KC_NO,
                                    KC_NO, KC_SPC,
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
                                    KC_NO, L_LOWER,
                                                KC_NO, KC_NO,
                                                KC_NO, KC_NO
    );

    uint32_t lower[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
            KC_NO,   KC_NO,   KC_NO,   KC_NO,   KC_NO,      KC_NO,
            KC_VOLU, KC_EXLM, KC_AT,   KC_PLUS, KC_EQL,     KC_BSLS,
            KC_VOLD, KC_AMPR, KC_HASH, KC_MINS, S(KC_MINS), KC_PIPE,
            KC_MUTE, KC_ASTR, KC_PERC, KC_CIRC, KC_DLR,     KC_SLSH,
                            KC_NO, KC_NO,
                                                _______, _______,
                                                                _______, _______,
                                                                _______, _______
    );

    uint32_t raise[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
            KC_NO,   KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
            KC_TAB,  KC_NO, KC_7,  KC_8,  KC_9,  KC_NO,
            KC_LCTL, KC_NO, KC_4,  KC_5,  KC_6,  KC_NO,
            KC_LSFT, KC_NO, KC_1,  KC_2,  KC_3,  KC_0,
                            KC_NO, KC_NO,
                                                _______, _______,
                                                                _______, _______,
                                                                _______, _______
    );

    uint32_t adjust[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
            PRINT_BATTERY, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
            KC_NO,         KC_NO, KC_F7, KC_F8, KC_F9, KC_NO,
            KC_NO,         KC_NO, KC_F4, KC_F5, KC_F6, KC_NO,
            PRINT_INFO,    KC_NO, KC_F1, KC_F2, KC_F3, KC_NO,
                                    KC_NO, KC_NO,
                                                    _______,_______,
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
