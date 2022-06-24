const mongoose = require("mongoose")

const measurementSchema = new mongoose.Schema({
  customer_id:{
    type: String,
    required: true
  },
  weight: {
    type: String
  },
  height:{
    type: String
  },
  jacket: {
    length: {
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    chest: {
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    waist: {
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    hips: {
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    shoulder: {
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    bicep: {
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    left_sleeve: {
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    right_sleeve: {
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    front: {
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    jacket_back: {
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    jacket_cuff: {
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    first_button: {
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    note:{
      type: String
    }
    
  },
  pants:{
    length:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    waist:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    hips:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    crotch:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    thigh:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    calf:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    knee:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    culf:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    note:{
      type: String
    }
    
  },
  vest:{
    length:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    waist:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    hips:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    chest:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    shoulder:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    note:{
      type: String
    }
  },
  shirt:{
    length:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    waist:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    hips:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    chest:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    shoulder:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    neck:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    bicep:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    left_sleeve:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    right_sleeve:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    left_culf:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    right_culf:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    arm_hole:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    note:{
      type: String
    }
  },
  overcoat:{
    length:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    waist:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    hips:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    chest:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    shoulder:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    bicep:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    left_sleeve:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    right_sleeve:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    culf:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    front:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    back:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    note:{
      type: String
    }
  },
  long_tail:{
    front_length:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    back_length:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    hips:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    chest:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    waist:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    shoulder:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    bicep:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    left_sleeve:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    right_sleeve:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    culf:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    first_button:{
      value:{
        type: Number,
      },
      adjustment:{
        type: Number,
        default: 0
      },
      total_value:{
        type: Number,
      }
    },
    note:{
      type: String
    }
  }


}) 
const Measurement = mongoose.model("Measurement", measurementSchema)
module.exports = Measurement