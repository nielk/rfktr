/**
 * Book
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
    clientName: {
      type: 'string',
      maxLength: 150,
      required: true
    },
    date: {
      type: 'date',
      required: true
    },
    published: {
      type: 'boolean',
      required: true
    }
  }

};
