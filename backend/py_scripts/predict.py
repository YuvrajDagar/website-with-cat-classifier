import numpy as np
import h5py
import matplotlib.pyplot as plt
import matplotlib
import scipy
from PIL import Image
from scipy import ndimage
from dnn_app_utils_v3 import *
import dnn_utils_v2
import parameters
import sys
import os



def decide(parameters, path):
    num_px = 64
    my_label_y = [1]
    cwd = os.getcwd()
    #print(cwd)
    #fname = "../uploads/photo.jpg"
    fname = path
    image = np.array(Image.open(fname).resize((num_px, num_px)))
    plt.imshow(image)
    image = image / 255.
    image = image.reshape((1, num_px * num_px * 3)).T

    my_predicted_image = predict(image, my_label_y, parameters)

    classes = ["non cat", "cat"]

    print("y = " + str(np.squeeze(my_predicted_image)) + ", The model predicts a \"" +
          classes[int(np.squeeze(my_predicted_image))] + "\" picture.")

#print(sys.argv[1])
parameters_here = parameters.parameters
#f = open("parameters.txt", "r")
#parameters = f.read()
# f.close()
decide(parameters_here, sys.argv[1])

