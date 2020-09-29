"use strict"

export const multiCommandContexts = {
    'MANIPULAR ELEMENTO': 'manipulate_element',
    'INSERIR VALOR': 'insert_value',
    'INSERIR ATRIBUTO': 'insert_attribute',
    'VALOR DE ATRIBUTO': 'attribute_value'
}

export const multiContextActions = {
    'manipulate_element': {
        action: null,
        param: false,
        nextContext: null,
        stillContext: true
    },
    'insert_value': {
        action: 'setCursorForInsertingValue',
        param: false,
        nextContext: 'insert_element_value',
        stillContext: true
    },
    'insert_element_value': {
        action : 'insertValueToElement',
        param: true,
        nextContext: 'insert_element_value',
        stillContext: true
    },
    'insert_attribute': {
        action : 'setCursorForInsertingAttribute',
        param: false,
        nextContext: 'insert_attribute_name',
        stillContext: true
    },
    'insert_attribute_name': {
        action : 'insertAttributeToElement',
        param: true,
        nextContext: 'insert_attribute_name',
        stillContext: true
    },
    'attribute_value': {
        action : null,
        param: false,
        nextContext: 'find_attribute_pos',
        stillContext: true
    },
    'find_attribute_pos': {
        action : 'setAttributeValuePos',
        param: true,
        nextContext: 'attribute_value_name',
        stillContext: true
    },
    'attribute_value_name': {
        action : 'insertAttributeValue',
        param: true,
        nextContext: null,
        stillContext: false
    }
}

