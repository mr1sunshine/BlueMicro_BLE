/*
Copyright 2018 <Pierre Constantineau>

3-Clause BSD License

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR 
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT 
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

#ifndef KEYMAP_H
#define KEYMAP_H
#include <stdint.h>
#include "hid_keycodes.h"
#include "hardware_variants.h"
#include "keyboard_config.h"
#include "advanced_keycodes.h"
#include "KeyScanner.h"
#include "Key.h"
#include <array>

// Layers Definitions

#define _QWERTY 0
#define _LOWER 1
#define _RAISE 2
#define _ADJUST 3


// Layers keycodes Definitions

#define L_QWERTY   (LAYER_0 + _QWERTY)
#define L_LOWER    (LAYER_0 + _LOWER)
#define L_RAISE    (LAYER_0 + _RAISE)
#define L_ADJUST   (LAYER_0 + _ADJUST)



#define _______ KC_TRNS
#define XXXXXXX KC_NO
#define KC_CUT  LCTL(KC_X)	// CUT
#define KC_CPY  LCTL(KC_C)	// COPY
#define KC_PST  LCTL(KC_V)	// PASTE
#define KC_UND  LCTL(KC_Z)	// UNDO

// define macro hooks
#define FLSCRN LCTL(LALT(LGUI(KC_F)))
#define MXSCRN LCTL(LALT(LGUI(KC_M)))
#define NTSCRN LCTL(LALT(LGUI(KC_N)))
#define SEARCH LSFT(LGUI(KC_UP))
#define LTSCRN LCTL(KC_LEFT)
#define RTSCRN LCTL(KC_RIGHT)
#define RPLACE LGUI(KC_F2)
#define DLTROW LALT(LSFT(KC_BSPC))
#define VSBACK LCTL(KC_MINS)

#define USER_MACRO_FUNCTION   0 
void process_user_macros(uint16_t macroid);


#define USER_LAYER_FUNCTION   0 
void process_user_layers(uint16_t layermask);

void setupKeymap();
extern std::array<std::array<Key, MATRIX_COLS>, MATRIX_ROWS> matrix;
extern void addStringToQueue(const char* str);
extern void addKeycodeToQueue(const uint16_t keycode);

#endif /* KEYMAP_H */
