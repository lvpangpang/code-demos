import React from 'react'

function FormCreate(Comp) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
      this.options = {}
    }

    inputChange = (e) => {
      const val = e.target.value
      const name = e.target.name
      const options = this.options
      const { rules } = options[name] || []

      // 实时效验
      if (rules[0]['required']) {
        if (val === '') {
          console.log(rules[0]['message'])
        }
      }

      this.setState({
        [name]: val,
      })
    }

    getFieldDecorator = (field, options = {}) => {
      this.options[field] = options
      // this.state[field] = options.initialValue || ''
      return (inputComp) => {
        return React.cloneElement(inputComp, {
          name: field,
          value: this.state[field] || options.initialValue || '',
          onChange: this.inputChange,
        })
      }
    }

    getFieldValue = (field) => {
      return this.state[field]
    }

    getFieldsValue = () => {
      return this.state
    }

    setFieldsValue = (obj) => {
      this.setState({
        ...this.state,
        ...obj,
      })
    }

    validateFields = (callback) => {
      const state = { ...this.state }
      const errors = []
      const options = this.options
      for (let x in options) {
        const { rules } = options[x] || {}
        rules?.forEach((item) => {
          if (item.required === true) {
            if (!state[x]) {
              errors.push({
                [x]: item.message,
              })
            }
          }
        })
      }
      if (errors.length > 0) {
        callback(errors, state) //存在错误，则返回错误信息
      } else {
        callback(undefined, state)
      }
    }

    render() {
      return (
        <Comp
          getFieldDecorator={this.getFieldDecorator}
          getFieldValue={this.getFieldValue}
          getFieldsValue={this.getFieldsValue}
          setFieldsValue={this.setFieldsValue}
          validateFields={this.validateFields}
        ></Comp>
      )
    }
  }
}

export default FormCreate
