class AlreadyExistsError(Exception):
    def __init__(self, entity):
        self.message = f'{entity} already exists'
        super(AlreadyExistsError, self).__init__(self.message)


class NotExistError(Exception):
    def __init__(self, entity_type, entity_id):
        self.message = f'There is no {entity_type} with id {entity_id}'
        super(NotExistError, self).__init__(self.message)


class InputLengthError(Exception):
    def __init__(self, field_name, field_input, length_limit, too_short=True):
        self.message = f'Field {field_name} must be {"longer" if too_short else "shorter"} than {length_limit}, was {len(field_input)} ({field_input})'
        super(InputLengthError, self).__init__(self.message)
