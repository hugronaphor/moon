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

/**
 * Push the data about current page into JavaScript.
 *
 * @group: ActiveItem
 */
function moon_preprocess_html(&$variables) {

  $page = menu_get_item();

  if (!empty($page['path'])) {
    switch ($page['path']) {
      // Taxonomy term pages.
      case 'taxonomy/term/%':

        if (isset($page['page_arguments'][0]->vocabulary_machine_name)) {

          // Photo taxonomy term detected.
          if ($page['page_arguments'][0]->vocabulary_machine_name == 'photo_type') {
            _moon_add_menu_data_js('photo');
            return;
          }

          // Video taxonomy term detected.
          if ($page['page_arguments'][0]->vocabulary_machine_name == 'video_type') {
            _moon_add_menu_data_js('video');
            return;
          }
        }
        break;
      // About pages(multilingual simulation).
      case 'about':
        _moon_add_menu_data_js('about');
        break;

      // Panel Node page.
      case 'node/%':

        if (!empty($page['page_arguments'][0])) {
          $node = $page['page_arguments'][0];

          $main_author_tid = 12;
          $author = 'main';
          if (!empty($node->field_author[LANGUAGE_NONE][0]['tid']) && $node->field_author[LANGUAGE_NONE][0]['tid'] != $main_author_tid) {
            $author = 'special';
          }

          drupal_add_js(array(
            'pageAuthor' => array(
              'which' => $author,
              'authorName' => 'Stas', // @todo: get the author name.
            )
          ), array(
            'type' => 'setting'
          ));

        }

        break;


    }
  }
}

function moon_preprocess_media_vimeo_video(&$variables) {
  // The function name may be changed.
  // @see: http://www.drupalcontrib.org/api/drupal/contributions!file_entity!file_entity.file_api.inc/function/file_uri_to_object/7
  if (!function_exists('file_uri_to_object')) {
    return;
  }

  $file = file_uri_to_object($variables['uri']);
  $ratio = field_get_items('file', $file, 'field_vimeo_ratio');

  if (empty($ratio)) {
    return;
  }

  $ratio = explode('x', $ratio[0]['safe_value']);

  // Push personalized video ratio.
  $variables['width'] = $ratio[0];
  $variables['height'] = $ratio[1];
}
