/**
 * Fiche
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs    :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      maxLength: 150,
      required: true
    },
    title2: {
      type: 'string',
      maxLength: 150
    },
    date: {
      type: 'date',
      required: true
    },
    content: {
      type: 'text',
      required: true
    },
    rawContent: {
      type: 'text',
      required: true
    },
    contentFormatter: {
      type: 'string',
      maxLength: 255
    },
    projectUrl: {
      type: 'string',
      maxLength: 255
    },
    published: {
      type: 'boolean',
      required: true
    },
    image: {
      type: 'string',
      maxLength: 255,
      required: true
    },
    tags: {
      type: 'array',
      required: true
    }
  }

};
