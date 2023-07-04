const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  template_id: {
    type: String,
    required: true,
  },
  personalInfo: {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  experience: [
    {
      company: {
        name: {
          type: String,
          default: '',
          required: [true, 'Company name is required'],
        },
        website: {
          type: String,
          match: /^http(s|):\/\/(www\.|)mysite\.co\?search=pattern&co=43/,
        },
        startDate: {
          type: Date,
          default: '',
          required: [true, 'Starting Date is required'],
        },
        endDate: {
          type: Date,
          default: '',
          required: [true, 'Ending Date is required'],
        },
        isCurrentJob: {
          type: Boolean,
          default: false,
        },
        jobType: {
          type: String,
          enum: ['Full Time', 'Part time', 'Internship'],
          required: [true, 'Job type is required'],
        },
        position: {
          type: String,
          default: '',
          required: [true, 'Position is required'],
        },
        location: {
          type: String,
          default: '',
        },
        description: {
          type: String,
          default: '',
        },
        skillsUsed: [
          {
            type: String,
          },
        ],
        certificate: {
          type: String,
          match: /^http(s|):\/\/(www\.|)mysite\.co\?search=pattern&co=43/,
        },
      },
    },
  ],
  education: [
    {
      degree: {
        type: String,
        required: true,
      },
      university: {
        type: String,
        required: true,
      },
      timeline: {
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
      },
      currentStudent: {
        type: Boolean,
      },
      cgpa: String,
    },
  ],
  skills: {
    languages: [String],
    tools: [String],
    libraries: [String],
    databses: [String],
  },
  projects: [
    {
      title: {
        type: String,
        required: [true, 'Project title is required'],
      },
      github_url: {
        type: String,
        match: /^http(s|):\/\/(www\.|)mysite\.co\?search=pattern&co=43/,
      },
      live_demo: {
        type: String,
        match: /^http(s|):\/\/(www\.|)mysite\.co\?search=pattern&co=43/,
      },
      description: [String],
      skillsUsed: [String],
    },
  ],
  achievements: [String],
  certifications: [
    {
      title: String,
      link: String,
    },
  ],
});

resumeSchema.pre('save', function (next) {
  if (this.experience && this.experience.company.skillsUsed.length < 3) {
    const error = new Error('Minimum 3 skills are required');
    return next(error);
  }
  next();
});

const userSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
    },
    resume: {
      type: resumeSchema,
    },
    googleId: {
      type: String,
    },
  },
  { timestamps: true }
);

// Create a user model
const User = mongoose.model('User', userSchema);

module.exports = User;
