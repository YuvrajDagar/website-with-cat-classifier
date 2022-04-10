# %%
from dnn_app_utils_v3 import load_data
import tensorflow as tf
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.metrics import categorical_crossentropy
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Activation, Dense, Flatten, BatchNormalization, Conv2D, MaxPool2D
from keras.preprocessing.image import ImageDataGenerator
import numpy as np
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

physical_devices = tf.config.experimental.list_physical_devices('GPU')
print('Num GPUs Available: ', len(physical_devices))
tf.config.experimental.set_memory_growth(physical_devices[0], True)


train_x, train_y, test_x, test_y, classes = load_data()
train_x = train_x.astype(np.float)
train_y = train_y.astype(np.float)
test_x = test_x.astype(np.float)
test_y = test_y.astype(np.float)
# train_x /= 255
# test_x /= 255
train_y = train_y.reshape(-1,1)
test_y = test_y.reshape(-1,1)
# %%
train_x.shape
train_y.shape
# %%
X_train, X_val, Y_train, Y_val = train_test_split(train_x, train_y, test_size=0.1, random_state=2)
data = ImageDataGenerator(preprocessing_function=tf.keras.applications.vgg16.preprocess_input)
# %%
C = tf.constant(2, name = "C")
train_y = tf.one_hot(
    train_y, C, on_value = 1.0, off_value = 0.0, axis =-1)
train_y = train_y.numpy()
print(train_y)
# %%
vgg16_model = tf.keras.applications.vgg16.VGG16()
vgg16_model.summary()
model = Sequential()
for layer in vgg16_model.layers[:-1]:
        model.add(layer)
print(len(model.layers))
for i in range(0,21):
     model.layers[i].trainable = False
model.add(Dense(units=2, activation='softmax'))
model.compile(optimizer=Adam(learning_rate=0.0001), loss='categorical_crossentropy', metrics=['accuracy'])
model.summary()

# %%
history = model.fit(data.flow(X_train, Y_train), epochs=5, 
                    validation_data=(data.flow(X_val, Y_val)))
plt.plot(history.history['accuracy'], label='accuracy')
plt.plot(history.history['val_accuracy'], label = 'val_accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.ylim([0.5, 1])
plt.legend(loc='lower right')

# %%
test_loss, test_acc = model.evaluate(test_x,  test_y, verbose=2)
print(test_acc)
print(test_loss)
# %%
from PIL import Image
num_px = 64
#print(cwd)
fname = "./photo.jpg"
#fname = path
image = np.array(Image.open(fname).resize((num_px, num_px)))
#plt.imshow(image)
image = image / 255.
image = image.reshape((1, num_px, num_px , 3))
predictions = model.predict(image)
print(predictions)

# %%
