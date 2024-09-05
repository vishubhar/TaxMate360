import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

const FeedbackForm = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(0);

  const handleCategorySelection = (category) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter((item) => item !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <Image
            style={[styles.starIcon, i <= rating && styles.selectedStar]}
            source={require('../Assets/icons/starrating.png')}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.ratingSection}>
        {renderStars()}
      </View>
      <View style={styles.feedbackSection}>
        <Text style={styles.heading}>Your feedback matters</Text>
        <Text style={{ marginBottom: 10, fontSize:15,  }}>How can we improve?</Text>
        <View style={styles.categoryButtons}>
          <TouchableOpacity
            style={[styles.categoryButton, selectedCategory.includes('Guidance') && styles.selectedCategory]}
            onPress={() => handleCategorySelection('Guidance')}
          >
            <Text style={styles.categoryLabel}>Guidance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryButton, selectedCategory.includes('Payment') && styles.selectedCategory]}
            onPress={() => handleCategorySelection('Payment')}
          >
            <Text style={styles.categoryLabel}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryButton, selectedCategory.includes('ITR Filing') && styles.selectedCategory]}
            onPress={() => handleCategorySelection('ITR Filing')}
          >
            <Text style={styles.categoryLabel}>ITR Filing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryButton, selectedCategory.includes('Dashboard') && styles.selectedCategory]}
            onPress={() => handleCategorySelection('Dashboard')}
          >
            <Text style={styles.categoryLabel}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryButton, selectedCategory.includes('GST') && styles.selectedCategory]}
            onPress={() => handleCategorySelection('GST')}
          >
            <Text style={styles.categoryLabel}>GST</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            placeholder="Share few words"
            style={styles.textInput}
            multiline
            value={feedbackText}
            onChangeText={(text) => setFeedbackText(text)}
          />
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={{ color:"white", fontSize:14 , fontWeight:'600'}}>
            Submit Feedback
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin: 5,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  ratingSection: {
    marginTop: 10,
    flexDirection: 'row',
  },
  submitButton: {
    marginTop:10,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#1E74FD",
    borderRadius:10
  },
  starIcon: {
    width: 30,
    height: 30,
    margin: 5,
    resizeMode: 'cover',
  },
  selectedStar: {
    tintColor: 'gold',
  },
  feedbackSection: {
    marginTop: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
    marginBottom: 30
  },
  categoryButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedCategory: {
    backgroundColor: '#1E74FD',
  },
  categoryLabel: {
    color: 'black',
  },
  textInputWrapper: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textInput: {
    fontSize: 16,
  },
});

export default FeedbackForm;
