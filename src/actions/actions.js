'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const contactFormHandler = async ({ name, email, message }) => {
  try {
    const newContact = await prisma.contactForm.create({
      data: {
        name,
        email,
        message,
      },
    });
    return newContact;
  } catch (error) {
    console.error('Error creating contact form entry:', error);
  }
};

export const newsletterFormHandler = async ({ email }) => {
  try {
    const newNewsletter = await prisma.newsletterForm.create({
      data: {
        email,
      },
    });
    return newNewsletter;
  } catch (error) {
    console.error('Error creating newsletter subscription:', error);
  }
};

export const loginFormHandler = async ({ email, password }) => {
  try {
    // Fetch user by email
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // Check if user exists
    if (!user) {
      return { error: 'User not found' };
    }

    // Verify the password (assuming password is hashed in the DB)
    const isPasswordValid = password === user.password;

    if (!isPasswordValid) {
      return { error: 'Invalid password' };
    }

    // Return the user or a success message (e.g., token generation could happen here)
    return { message: 'Login successful', user };
  } catch (error) {
    console.error('Error logging in:', error);
    return { error: 'An error occurred during login' };
  }
};
