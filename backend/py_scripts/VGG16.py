# %%
import tensorflow as tf
import numpy as np
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.metrics import categorical_crossentropy
from PIL import Image
from timeit import default_timer as timer
from tensorflow import keras
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Activation, Dense, Flatten, BatchNormalization, Conv2D, MaxPool2D
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from sklearn.metrics import confusion_matrix
import itertools
import os
import shutil
import random
import glob
import warnings
warnings.simplefilter(action='ignore', category=FutureWarning)

os.chdir('')



# physical_devices = tf.config.experimental.list_physical_devices('GPU')
# print('Num GPUs Available: ', len(physical_devices))
# tf.config.experimental.set_memory_growth(physical_devices[0], True)
# # %%
# train_path = '../../../../../../AI/cat_vs_dog/PetImages'

# # train_batches = ImageDataGenerator(preprocessing_function=tf.keras.applications.vgg16.preprocess_input)\
# #     .flow_from_directory(directory=train_path, target_size=(224,224), classes=['cat', 'dog'], batch_size=50)
# num_px = 224
# image = np.array(Image.open('../../../../../../AI/cat_vs_dog/PetImages/Cat/0.jpg').resize((num_px, num_px)))
# image = np.expand_dims(image, axis=0)
# X_train_cat = np.array(image)
# X_train_cat.shape
# # %%
# start = timer()
# last = timer()
# for i in range(1,12500):
#     if(i==835 or i==666): continue
#     image = np.array(Image.open('../../../../../../AI/cat_vs_dog/PetImages/Cat/'+str(i)+'.jpg').resize((num_px, num_px)).convert('RGB'))
#     image = np.expand_dims(image, axis=0)
#     X_train_cat = np.append(X_train_cat,image,axis=0)
#     print(image.shape,i)
#     print('Time from start : ',"%.5f" % (timer()-start),'| Time from last :',"%.5f" % (timer()-last))
#     last = timer()
# X_train_cat.shape
# # %%
# Y_train_cat = np.ones((12498,1))
# Y_train_cat
# # %%
# num_px = 224
# image = np.array(Image.open('../../../../../../AI/cat_vs_dog/PetImages/Dog/0.jpg').resize((num_px, num_px)))
# image = np.expand_dims(image, axis=0)
# X_train_dog = np.array(image)
# X_train_dog.shape
# # %%
# start = timer()
# last = timer()
# for i in range(8000,12500):
#     if(i==11702): continue
#     image = np.array(Image.open('../../../../../../AI/cat_vs_dog/PetImages/Dog/'+str(i)+'.jpg').resize((num_px, num_px)).convert('RGB'))
#     image = np.expand_dims(image, axis=0)
#     X_train_dog = np.append(X_train_dog,image,axis=0)
#     print(image.shape,i)
#     print('Time from start : ',"%.5f" % (timer()-start),'| Time from last :',"%.5f" % (timer()-last))
#     last = timer()
# X_train_dog.shape

# # %%
# Y_train_dog = np.zeros((12499,1))
# Y_train_dog
# %%
# from sklearn.model_selection import train_test_split
# X_train = np.concatenate((X_train_cat,X_train_dog),axis=0)
# X_train.shape
# # %%
# Y_train = np.concatenate((Y_train_cat,Y_train_dog),axis=0)
# Y_train.shape
# # %%
# X_train /= 255
# Y_train /= 255

# # %%
# X_train, X_val, Y_train, Y_val = train_test_split(X_train, Y_train, test_size=0.1, random_state=2)
# # %%
