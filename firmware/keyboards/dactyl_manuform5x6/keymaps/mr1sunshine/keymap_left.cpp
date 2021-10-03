#include "keymap.h"

std::array<std::array<Key, MATRIX_COLS>, MATRIX_ROWS> matrix = {
    KEYMAP(
        KC_ESC,  KC_1, KC_2,    KC_3,    KC_4,    KC_5,
        KC_TAB,  KC_Q, KC_W,    KC_E,    KC_R,    KC_T,
        KC_LCTL, KC_A, KC_S,    KC_D,    KC_F,    KC_G,
        KC_LSFT, KC_Z, KC_X,    KC_C,    KC_V,    KC_B,
                    KC_LBRC, KC_RBRC,
                                        KC_LGUI, L_LOWER,
                                                        KC_SPC, KC_LALT,
                                                        KC_HOME, KC_GRAVE
    )
};

void setupKeymap() {
    uint32_t lower[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
            KC_F12,  KC_F1,   KC_F2,   KC_F3,   KC_F4,   KC_F5, \
            KC_VOLU, _______, _______, KC_HOME, KC_END,  SEARCH, \
            KC_VOLD, _______, _______, _______, FLSCRN,  VSBACK, \
            KC_MUTE, _______, NTSCRN,  MXSCRN,  _______, _______, \
                            KC_LCBR, KC_RCBR, \
                                                _______, _______, \
                                                                _______, _______, \
                                                                _______, _______  \
    );

    uint32_t raise[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
            _______, _______, _______, _______, _______, _______, \
            KC_TAB,  _______, _______, _______, _______, _______, \
            KC_LCTL, _______, _______, _______, _______, _______, \
            KC_LSFT, _______, _______, _______, _______, _______, \
                            _______, _______, \
                                                _______, _______, \
                                                                _______, _______, \
                                                                _______, _______  \
    );

    uint32_t adjust[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
            PRINT_BATTERY, _______, _______, _______, _______, _______, \
            _______,       _______, _______, _______, _______, _______, \
            _______,       _______, _______, _______, _______, _______, \
            PRINT_INFO,    _______, _______, _______, _______, _______, \
                                    _______, _______, \
                                                    _______,_______, \
                                                                    _______, _______, \
                                                                    _______, _______  \
    );

    for (int row = 0; row < MATRIX_ROWS; ++row)
    {
        for (int col = 0; col < MATRIX_COLS; ++col)
        {
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
