<?php

/**
 * @file
 * Write your theme logic here.
 */

/**
 * Implements hook_preprocess_node().
 */
function moon_preprocess_node(&$vars) {
  if ($vars['view_mode'] == 'teaser') {
    $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->type . '__teaser';
  }
}

function moon_form_contact_site_form_alter(&$form, &$form_state, $form_id) {
  $form['name']['#attributes']['placeholder'] = t("NAME");
  $form['name']['#title_display'] = 'invisible';

  $form['mail']['#attributes']['placeholder'] = t("EMAIL");
  $form['mail']['#title_display'] = 'invisible';

  $form['subject']['#attributes']['placeholder'] = t("SUBJECT");
  $form['subject']['#title_display'] = 'invisible';

  $form['message']['#attributes']['placeholder'] = t("YOUR MESSAGE");
  $form['message']['#title_display'] = 'invisible';

  $form['copy']['#access'] = FALSE;
  // unset($form['copy']);

  $form['actions']['submit']['#value'] = t('Send');
}
